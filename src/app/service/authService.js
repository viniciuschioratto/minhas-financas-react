import LocalStorageService from './localstorageService'

export const USUARIO_LOGADO = '_usuario_logado'

export default class AuthService{

    static isUsuarioAutenticado(){
        const usuario = LocalStorageService.obterItem(USUARIO_LOGADO)
        return usuario && usuario.id
    }

    static removerUsuarioAutenticado(){
        LocalStorageService.removetItem(USUARIO_LOGADO)
    }
    
    static logar(usuario){
        LocalStorageService.adicionarItem(USUARIO_LOGADO, usuario)
    }

    static obterUsuarioAutenticado(){
        return LocalStorageService.obterItem(USUARIO_LOGADO)
    }
}