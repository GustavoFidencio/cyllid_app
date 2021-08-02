const env = 'https://cyllid.hopto.org'

export default {
    validPassword: `${env}/auth/v1/token`,
    dataUser: `${env}/api/v1/user/logged`,
    checkCpf: `${env}/api/v1/user/check/cpf`,
    transactionsAll: `${env}/api/v1/transaction`,
    balance: `${env}/api/v1/transaction/balance`,
    checkEmail: `${env}/api/v1/user/check/email`,
    checkUser: `${env}/api/v1/user/check/username`,
    
}