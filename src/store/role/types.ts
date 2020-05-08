export interface RoleState {
  value: {
    pagedResults: [
      {
        id: string;
        userId: string;
        name: string;
        userName: string;
        positionType: number;
        countOfRoles: number;
      }
    ];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
  };
  errors: string[];
  hasErrors: boolean;
}

export const roleInitialState: RoleState = {
  value: {
    pagedResults: [{
      id: '',
      userId: '',
      name: '',
      userName: '',
      positionType: 0,
      countOfRoles: 0,
    }],
    currentPage: 0,
    pageCount: 0,
    pageSize: 0,
    rowCount: 0,
  },
  errors: [],
  hasErrors: false,
}
