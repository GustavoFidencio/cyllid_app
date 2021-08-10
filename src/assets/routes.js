const env = 'https://cyllid.hopto.org'

export default {
    validPassword: `${env}/auth/v1/token`,
    dataUser: `${env}/api/v1/user/logged`,
    acceptTerm: `${env}/api/v1/term/tosign`,
    solicitUser: `${env}/api/v1/user/request`,
    checkCpf: `${env}/api/v1/user/check/cpf`,
    pendentTerms: `${env}/api/v1/term/verify`,
    transactionsAll: `${env}/api/v1/transaction`,
    balance: `${env}/api/v1/transaction/balance`,
    checkEmail: `${env}/api/v1/user/check/email`,
    checkUser: `${env}/api/v1/user/check/username`,
}