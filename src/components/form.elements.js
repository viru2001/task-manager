import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


export const Form = styled.form`
  width: 100%;
  margin-top: 2vh;
`

export const StyledBtn = styled(Button)`
    &&& {
    margin : 2vh 0;
    }
`

export const LockIcon = styled(Avatar)`
&&& {
    margin : 1vh;
    background-color : #f50057;
}
`

export const FormContainer = styled.div`
  margin-top: 8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`