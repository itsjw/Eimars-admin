export const navigation = {
  brand:      'EIMARS-ADMIN',
  leftLinks:  [],
  rightLinks: [
    {
      label:      'Home',
      link:       '/',
      view:       'home',
      isRouteBtn: true
    },
    {
      label:      'About',
      link:       '/about',
      view:       'about',
      isRouteBtn: true
    }
  ],
  sideMenu: [
    // group menu #1
    {
      id: 1,
      group: 'Dashboard',
      menus: [
        {
          name: 'Dashboard preview',
          linkTo: '/',
          faIconName: 'fa-eye'
        }
      ]
    },
    //group menu #2
    {
      id: 2,
      group: 'User Management',
      menus: [
        {
          name: 'App User',
          linkTo: '/User/AppUser',
          faIconName: 'fa-briefcase'
        },
        {
          name: 'Admin User',
          linkTo: '/User/AdminUser',
          faIconName: 'fa-briefcase'
        },
        {
          name: 'Role Management',
          linkTo: '/User/Role-Management',
          faIconName: 'fa-check-square-o'
        }
    
      ]
    },
     //group menu #3
    {
      id: 3,
      group: 'Login Summary',
      menus: [
        {
          name: 'App User',
          linkTo: '/User/LoginAppUser',
          faIconName: 'fa-briefcase'
        },
        {
          name: 'Admin User',
          linkTo: '/User/LoginAdminUser',
          faIconName: 'fa-briefcase'
        }
    
      ]
    },
     //group menu #4
    {
      id: 4,
      group: 'Configuration',
      menus: [
        {
          name: 'Package Settings',
          linkTo: '/User/Package',
          faIconName: 'fa-briefcase'
        }
    
      ]
    },
  ]
};
