import {StyleSheet} from 'aphrodite/no-important'

const globalFont = {
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    src: "url('fonts/Roboto-Regular.ttf') format('ttf')"
}

export const styles = StyleSheet.create({
    navBar: {
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '8vh'
    },
    textLogo: {
        alignSelf: 'center',
        color: '#fff',
        fontFamily: [globalFont, 'sans-serif'],
        fontSize: '1.2rem',
        display: 'inline-block'
    },
    iconMenu: {
        maxWidth: '20px',
        display: 'inline-block'
    },
    iconSignIn: {
        maxWidth: '20px',
        display: 'inline-block'
    },
    wrapper: {
        backgroundColor: '#f9f9f9'
    },
    homepage: {
        height: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchContainer: {
        fontFamily: [globalFont, 'sans-serif'],
        fontSize: '1rem',
        alignSelf: 'center',
        textAlign: 'center'
    },
    search: {
        minHeight: '3rem',
        width: '90%'
    }
})
