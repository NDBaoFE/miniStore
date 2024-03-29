
import { StyledBreadCrumb } from "./style";
import {  Link, useLocation } from 'react-router-dom';
function BreadCrumbHeader() {
    const breadcrumbNameMap = {
        '/revenue': 'Revenue',
        '/profile': 'Profile',
        '/apps/2': 'Application2',
        '/apps/1/detail': 'Detail',
        '/apps/2/detail': 'Detail',
        '/checkout': 'Checkout',
        '/voucher': 'Apply Voucher',
        '/voucher/new': 'Add Voucher',
        '/product':'Product',
        '/product/new':'Add Product',
        '/product/view':'View Product',
        '/user': 'User',
        '/user/add': 'Add User',
        '/user/detail':'User Detail',
        '/user/update':'User Update',
        '/setting' : 'Setting',
        '/setting/general' : 'General',
        '/notify':'Notification',
        '/notify/:id':'Detail',
        '/schedule':'Schedule',
        '/ticket': 'Ticket',
        '/payroll': 'Payroll List',
        '/payroll/:id': 'History',
        '/orderManagement': 'Order List',
        '/orderDetail': 'Order Detail'

        
      };
    const location = useLocation();
    
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
    };
  });

  const breadcrumbItems = [
    {
      title: <Link to="/">Home</Link>,
      key: 'home',
    },
  ].concat(extraBreadcrumbItems);
  return (
    <StyledBreadCrumb items={breadcrumbItems} />
  )
}

export default BreadCrumbHeader
