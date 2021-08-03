import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';

export const AddTaskTextField = styled(TextField)`
    width: 60vw;
`

export const AddTaskContainer = styled.div`
     display: flex;
    margin-top: 15vh;
    justify-content: center;
`

export const AddTaskBtn = styled(Button)`
    margin-left : 2vw;
`
export const NoTasksHeading = styled.h2`
     color: #3f51b5;
    text-align: center;
    margin-top: 10vh;
`

export const TaskTable = styled.table`
    margin: 5vh auto;
    color: #3f51b5;
`

export const ActionBtn = styled(Button)`
      margin: 0 1vw;
`