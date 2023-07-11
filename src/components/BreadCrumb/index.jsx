
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
        '/product':'Product',
        '/product/new':'Add Product',
        '/product/:id':'Update Product',
        '/user': 'User',
        '/user/add': 'Add User',
        '/user/details':'User Detail',
        '/user/update':'User Update',
        '/setting' : 'Setting',
        '/setting/general' : 'General',
        '/notify':'Notification',
        '/notify/:id':'Detail',
        
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
