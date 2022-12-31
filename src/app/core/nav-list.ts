export class NavItem {
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = ''
        ) {}
}

export const navList = [
    new NavItem('Dashboard', 'dashboard', 'Dashboard', 'dashboard'),
    new NavItem('Products', 'products', 'Products', 'precision_manufacturing'),
    new NavItem('Transactions', 'transactions', 'Transactions', 'receipt_long'),
];
