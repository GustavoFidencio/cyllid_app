export class Laws {

    static getLaw = key => {
        switch (key) {
            case 'keep_data':
                return {
                    title: 'Retenção de dados',
                    desc: 'Requerido',
                    number: 'Lei nº 13.709/2018 - Lei geral de proteção de dados estabelece.',
                    law: [
                        'Nao vou roubar o dinheiro do amiguinho',
                        'Nao vou matar nem roubar a rapaziada',
                        'Vou donatar pelo menos 1 real todo mes, pra ajudar a pagar o jujitso da vovó',
                        'Vou promover a paz',
                    ]
                }
            default:
                break;
        }
    }
}
