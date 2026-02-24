import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MenuItem {
    name: string;
    price: number;
}
export interface ContactInfo {
    hours: string;
    email: string;
    address: string;
    phone: string;
}
export interface backendInterface {
    addAdmin(admin: Principal): Promise<void>;
    getContactInfo(): Promise<ContactInfo>;
    getMenuItems(): Promise<Array<MenuItem>>;
    updateContactInfo(address: string, phone: string, hours: string, email: string): Promise<void>;
    updateMenuItem(name: string, price: number): Promise<void>;
}
