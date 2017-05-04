import * as React from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'


export class Home extends React.Component<{}, {}> {
    render() {
        return (
                <div>
                <div className={css(styles.navBar)}>
                    <img className={css(styles.menu)} src='assets/menu.svg'/>
                    <h1 className={css(styles.logo)}>HOLLOWVERSE</h1>
                    <img className={css(styles.signIn)} src='assets/sign-in.svg'/>
                </div>
                <div>
                    <div>
                        <h2>Search for a notable person.</h2>
                    </div>
                </div>
                </div>
        )
    }
}

const globalFont = {
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    src: "url('fonts/Roboto-Regular.ttf') format('ttf')"
}

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '5vh',
        width: '100%'
    },
    logo: {
        alignSelf: 'center',
        color: '#fff',
        fontFamily: [globalFont, 'sans-serif'],
        fontSize: '1.2rem',
        display: 'inline-block'
    },
    menu: {
        maxWidth: '20px',
        display: 'inline-block'
    },
    signIn: {
        maxWidth: '20px',
        display: 'inline-block'
    }
})
