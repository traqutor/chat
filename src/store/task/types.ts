import { Participant } from '@/store/conv/types';

export const TASK_STATUS = {
  New: 0,
  Acknowledged: 1,
  Resolved: 2,
  Cancelled: 3,
  Terminated: 4,
};

export interface Task {
  id: string;
  referenceNumber: number;
  title: string;
  priority: number;
  notes: string;
  raisedBy: Participant;
  participants: Participant[];
  status: number;
  createdDate: string;
  modifiedDate: string;
  order: number;
}

export interface TaskStateColumn {
  id: number;
  name: string;
  tasks: Task[];
}

export interface TaskState {
  data: {
    columns: TaskStateColumn[];
  };
}

export const taskInitialState: TaskState = {
  data: {
    columns: [
      {
        id: 0,
        name: 'New',
        tasks: [],
      },
      {
        id: TASK_STATUS.Acknowledged,
        name: 'Acknowledged',
        tasks: [],
      },
      {
        id: TASK_STATUS.Resolved,
        name: 'Resolved',
        tasks: [],
      },
      {
        id: TASK_STATUS.Cancelled,
        name: 'Cancelled',
        tasks: [],
      },
      {
        id: TASK_STATUS.Terminated,
        name: 'Terminated',
        tasks: [],
      },
    ],
  },
};
