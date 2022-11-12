(() => {

    //Aplicando el principio de responsabilidad unica
    //Priorizar la composición frente a la herencia

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
    }

    class User {
        email: string;
        role: string;
        private lastAccess: Date;
        constructor(
            { email, role }: UserInfo
        ) {
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }
        checkCredentials() {
            return true;
        }
    }

    interface SettingsInfo {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {
        workingDirectory: string;
        lastOpenFolder: string;
        constructor(
            { workingDirectory,
                lastOpenFolder
            }: SettingsInfo
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsInfo {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    class UserSettings{
        public person:Person;
        public user:User;
        public settings:Settings;
        constructor({name, gender, birthDate, email, role, workingDirectory, lastOpenFolder}:UserSettingsInfo){
            this.person = new Person({name, gender, birthDate});
            this.user = new User({email, role});
            this.settings = new Settings({workingDirectory, lastOpenFolder});

        }
    }

    const userSettings = new UserSettings(
        {
            workingDirectory: '/usr/home',
            lastOpenFolder: '/home',
            email: 'santiago@google.com',
            role: 'Admin',
            name: 'Santiago',
            gender: 'M',
            birthDate: new Date('2003-06-27')
        }
    );
    console.log({ userSettings });
})();