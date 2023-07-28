import mongoose from 'mongoose';
import { JOB_TYPE, JOB_STATUS } from '../utils/constants.js';

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: 'pending',
    },
    jobType: {
      type: String,
      enum: Object.values(JOB_TYPE),
      default: 'full-time',
    },
    jobLocation: {
      type: String,
      default: 'UK',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobSchema);
