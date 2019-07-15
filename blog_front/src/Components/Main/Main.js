import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.scss';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import BorderColor from '@material-ui/icons/BorderColor';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cookie from 'react-cookies';

const cx = classNames.bind(styles);

const useStyles = makeStyles(theme => ({
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
    cardGrid: {
        marginTop: '1px',
        flex: 1
    },

}))

const Main = ({isLogin}) => {
    const onClick = () => {
        cookie.remove('token');
        window.location.href = '/';
    }
    const title = ["안녕하세요 저의 첫 글입니다.", "롤 이란?", "게임하기"]
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
                        Blog
                    </Typography>
                    <IconButton href="/post">
                        <BorderColor/>
                    </IconButton>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    {
                        isLogin ? (<Button variant="outlined" size="small"> <Link color="inherit" underline="none" onClick={() => onClick()}> Sign out </Link></Button>) :
                        (<Button variant="outlined" size="small"> <Link color="inherit" underline="none" href="/signin"> Sign in </Link></Button>) 
                    }
                    
                </Toolbar>
                {/* Post List */}
                <Grid container spacing={3} className={classes.cardGrid}>
                    {title.map(title => (
                    <Grid item key={title} xs={6} md={6}>
                        <CardActionArea component="a" href="#">
                            <Card className={classes.card}>
                                <div className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography component="h2" variant="h5">
                                        {title}
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                            </CardActionArea>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Main;