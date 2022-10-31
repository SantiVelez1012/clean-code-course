(() => {

    //No aplicando el principio de responsabilidad unica

    type Gender = 'M' | 'F';

    interface PersonInfo {
        birthDate: Date;
        gender: Gender;
        name: string;
    }

    class Person {
        birthDate: Date;
        gender: string;
        name: string;
        constructor({ name, gender, birthDate }: PersonInfo) {
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    }

    interface UserInfo {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    class User extends Person {
        private lastAccess: Date;
        email: string;
        role: string;
        constructor(
            { email, role, name, gender, birthDate }: UserInfo
        ) {
            super({ name, gender, birthDate });
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }
        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsInfo {
        workingDirectory:string;
        lastOpenFolder:string;
        email:string;
        role:string;
        name:string;
        gender:Gender;
        birthDate:Date;
    }

    class UserSettings extends User {
        workingDirectory:string;
        lastOpenFolder:string;
        constructor(
            {   workingDirectory,
                lastOpenFolder,
                email,
                role,
                name,
                gender,
                birthDate }:UserSettingsInfo
        ) {
            super({email, role, name, gender, birthDate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

        const userSettings = new UserSettings(
            {workingDirectory:'/usr/home',
            lastOpenFolder:'/home',
            email:'santiago@google.com',
            role:'Admin',
            name:'Santiago',
            gender:'M',
            birthDate:new Date('2003-06-27')}
            );
        console.log({userSettings});
})();