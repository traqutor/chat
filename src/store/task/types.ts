import { Participant } from '@/store/conv/types';

export const TASK_STATUS = {
  New: 0,
  Queued: 1,
  Started: 2,
  Overdue: 3,
  Completed: 4,
};

export interface Task {
  id: string;
  referenceNumber: number;
  title: string;
  priority: number;
  notes: string;
  requestorSystemRoleId: string;
  participantsIds: string[];
  status: number;
  createdTimeOffset: string;
  modifiedTimeOffset: string;
  order: number;
}

export interface TaskCreate {
  title: string;
  priority: 0;
  notes: string;
  participantsIds: string[];
}

export interface TaskStateColumn {
  id: number;
  name: string;
  tasks: Task[];
}

export interface TaskState {
  data: {
    tasks: Task[];
    columns: TaskStateColumn[];
  };
}

export const taskInitialState: TaskState = {
  data: {
    columns: [
      {
        id: TASK_STATUS.New,
        name: 'New',
        tasks: [],
      },
      {
        id: TASK_STATUS.Queued,
        name: 'Queued',
        tasks: [],
      },
      {
        id: TASK_STATUS.Started,
        name: 'Started',
        tasks: [],
      },
      {
        id: TASK_STATUS.Overdue,
        name: 'Overdue',
        tasks: [],
      },
      {
        id: TASK_STATUS.Completed,
        name: 'Completed',
        tasks: [],
      },
    ],
    tasks: [],
  },
};
