const env = 'https://apicyllid.ddns.net'

export default {
    validPassword: `${env}/auth/v1/token`,
    dataUser: `${env}/api/v1/user/logged`,
    listTags: `${env}/api/v1/tag/outbound`,
    solicitUser: `${env}/api/v1/user/request`,
    acceptTerm: `${env}/api/v1/term/tosign`,
    checkCpf: `${env}/api/v1/user/check/cpf`,
    pendentTerms: `${env}/api/v1/term/verify`,
    transactionsAll: `${env}/api/v1/transaction`,
    usersPending: `${env}/api/v1/user/pending`,
    balance: `${env}/api/v1/transaction/balance`,
    checkEmail: `${env}/api/v1/user/check/email`,
    checkUser: `${env}/api/v1/user/check/username`,
}