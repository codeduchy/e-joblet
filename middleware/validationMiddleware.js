import mongoose from 'mongoose';
import { body, validationResult, param } from 'express-validator';
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
  UnauthorizedError,
} from '../errors/customErrors.js';
import { JOB_TYPE, JOB_STATUS } from '../utils/constants.js';
import Job from '../models/JobModel.js';
import User from '../models/UserModel.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((err) => err.msg);
        if (errorMessages[0].startsWith('No job')) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith('Not authorized')) {
          throw new UnauthenticatedError('Not authorized to access this route');
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError('Invalid MongoDB');
    const job = await Job.findById(value);
    if (!job) throw new NotFoundError(`No job with id: ${value}`);
    const isAdmin = req.user.role === 'admin';
    const isOwner = req.user.userId === job.createdBy.toString();
    if (!isAdmin && !isOwner) {
      throw UnauthorizedError('Not authorized to access this route');
    }
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError('Email already exists');
      }
    }),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  body('location').trim().notEmpty().withMessage('Location is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
]);

export const validateLoginInput = withValidationErrors([
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format'),
  body('password').notEmpty().withMessage('Password is required'),
]);

export const validateJobInput = withValidationErrors([
  body('company').trim().notEmpty().withMessage('Company is required'),
  body('position').trim().notEmpty().withMessage('Position is required'),
  body('jobLocation').trim().notEmpty().withMessage('Job location is required'),
  body('jobStatus')
    .isIn(Object.values(JOB_STATUS))
    .withMessage('Invalid status message'),
  body('jobType').isIn(Object.values(JOB_TYPE)).withMessage('Invalid job type'),
]);

export const validateUpdateUserInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new Error('email already exists');
      }
    }),
  body('lastName').notEmpty().withMessage('last name is required'),
  body('location').notEmpty().withMessage('location is required'),
]);
