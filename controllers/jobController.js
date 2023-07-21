import Job from '../models/JobModel.js';
import { StatusCodes } from 'http-status-codes';

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find();
  res.status(StatusCodes.OK).json(jobs);
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;
  const job = await Job.create({ company, position });
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  const id = req.params.id;
  const job = await Job.findById(id);
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const id = req.params.id;
  const job = await Job.findByIdAndUpdate(id, req.body);
  res.status(StatusCodes.OK).json({ job });
};

export const deleteJob = async (req, res) => {
  const id = req.params.id;
  const job = await Job.findByIdAndDelete(id);
  res.status(StatusCodes.OK).json({ job });
};
