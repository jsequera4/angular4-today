/**
 * Created by Arthur on 7/16/2017.
 */
export class Person{
    sn: number;
    fullName: string;
    msisdn: string;
    occupation: string;

    constructor(obj?: any) {
        this.sn         = obj && obj.id             || null;
        this.fullName   = obj && obj.name           || null;
        this.msisdn     = obj && obj.phone          || null;
        this.occupation = obj && obj.company.name   || null;
        console.log(obj);
    }
}