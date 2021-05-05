import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    UpdateDateColumn,
    CreateDateColumn,
    VersionColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { NextcloudUser } from './NextcloudUser';

@Entity()
export class NextcloudToken {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 1024 })
    uid: string;

    @Column('varchar', { length: 1024 })
    login_name: string;

    @Column('varchar', { length: 1024 })
    password: string;

    @Column('varchar', { length: 1024 })
    name: string;

    @Column('varchar', { length: 1024 })
    token: string;

    @Column('varchar', { length: 1024 })
    type: string;

    @Column('varchar', { length: 1024 })
    remember: string;

    @Column('varchar', { length: 1024 })
    last_activity: string;

    @Column('varchar', { length: 1024 })
    last_check: string;

    @Column('varchar', { length: 1024 })
    scope: string;

    @Column('varchar', { length: 1024 })
    private_key: string;

    @Column('varchar', { length: 1024 })
    public_key: string;

    @Column('varchar', { length: 1024 })
    version: string;

    @Column('varchar', { length: 1024 })
    password_invalid: string;

    @Column('datetime')
    private expires: Date;


    @UpdateDateColumn()
    changed: Date;

    @CreateDateColumn()
    created: Date;


    @OneToOne(type => NextcloudUser, user => user.token, {
        onDelete: 'CASCADE'
    })
    @JoinColumn()
    user: NextcloudUser;


    set expiresIn(expiresIn: string) {
        this.expires = new Date((Date.now() / 1000 + +expiresIn) * 1000);
    }

    get expiresIn(): string {
        return (((this.expires.valueOf() - Date.now()) / 1000 - 300)|0).toString();
    }
}
