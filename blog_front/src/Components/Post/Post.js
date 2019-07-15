import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Check from '@material-ui/icons/Check';
import BorderColor from '@material-ui/icons/BorderColor';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';
import FilledInput from '@material-ui/core/FilledInput';
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles(theme => ({
    title: {
        display: 'flex',
        marginTop: '10px'
    },
    body: {
        marginTop: '10px',
        display: 'flex',
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
}))

const Post = () => {
    const classes = useStyles();
    return (
        <div>
           <CssBaseline />
           <Container maxWidth="xl">
                <Toolbar className={classes.toolbar}>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        글쓰기
                    </Typography>
                    <IconButton href="/post">
                        <Check/>
                    </IconButton>
                    <Button variant="outlined" size="small">
                        <Link color="inherit" underline="none" href="/signUp">
                            Sign up
                        </Link>
                    </Button>
                </Toolbar>
                <Input placeholder="제목"
                autoFocus 
                className={classes.title}
                underline
                />
                <InputBase placeholder="내용"
                className={classes.body}
                multiline={true}
                rows={30}
                rowsMax={30}
                />
           </Container>          
        </div>
    );
};

export default Post;