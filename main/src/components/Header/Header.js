import React from 'react'
import { useStyles } from "./style";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Add, Apps } from "@material-ui/icons";

const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar className={classes.toolbar}>
                <div className={classes.headerWrapper}>
                    {/* {children} */}
                    <img
                    src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
                    alt="Classroom"
                    />
                    <Typography variant="h6" className={classes.title}>
                    Classroom
                    </Typography>
                </div>
                <div className={classes.header__wrapper__right}>
                    <Add />
                    {/* <Add onClick={handleClick} className={classes.icon} />
                    <Apps className={classes.icon} />
                    <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                    <MenuItem onClick={handleJoin}>Join Class</MenuItem>
                    <MenuItem onClick={handleCreate}>Create Class</MenuItem>
                    </Menu>
                    <div>
                    <Avatar
                        onClick={() => logout()}
                        src={loggedInUser?.photoURL}
                        className={classes.icon} 
                    />
                    </div>*/}
                </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
