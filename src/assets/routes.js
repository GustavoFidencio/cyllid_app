const env = 'https://cyllid.hopto.org'

export default {
    validPassword: `${env}/auth/v1/token`,
    dataUser: `${env}/api/v1/user/logged`,
    balance: `${env}/api/v1/transaction/balance`,
    checkUser: `${env}/api/v1/user/check/username`,
}