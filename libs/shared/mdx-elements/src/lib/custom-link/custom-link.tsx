import Link from 'next/link'
import './custom-link.module.css'

export interface CustomLinkProps{
  as: string;
  href: string;
}

export function CustomLink({as, href, ...otherProps}: CustomLinkProps) {

  return (
    <p className="my-6">
      <Link as={as} href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a {...otherProps} style={{ backgroundColor: 'red', color: 'white', marginTop: '20px' }} className="px-3 py-2" />
      </Link>
    </p>
  );
}