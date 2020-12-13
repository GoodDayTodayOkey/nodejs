export interface Routes {
    path: string,
    exact: boolean,
    component: React.FC,
    getInitalState: Function;
}