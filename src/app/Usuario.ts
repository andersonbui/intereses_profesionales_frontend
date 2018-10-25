export class Roles {
    estudiante: boolean;
    docente?: boolean;
    admin?: boolean;
}

export class Usuario {
    nombre: string;
    email: string;
    photoURL: URL;
    roles: Roles;
    uid: string;

    constructor(user) {
        this.email = user.email;
        this.photoURL = user.photoURL;
        this.uid = user.uid;
        this.roles = { estudiante: true};
    }
}
