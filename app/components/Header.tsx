'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
    HomeIcon,
    DocumentIcon,
    AcademicCapIcon,
    CommandLineIcon,
    LinkIcon,
    Cog6ToothIcon
} from "@heroicons/react/24/outline";

interface LinkProps {
    name: string;
    href: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const links: LinkProps[] = [
    {
        name: 'Home',
        href: '/',
        icon: HomeIcon
    },
    {
        name: 'About',
        href: '/about',
        icon: DocumentIcon
    },
    {
        name: 'Education',
        href: '/education',
        icon: AcademicCapIcon
    },
    {
        name: 'Projects',
        href: '/projects',
        icon: CommandLineIcon
    },
    {
        name: 'Contact',
        href: '/contact',
        icon: LinkIcon
    },
];

const Header = () => {
    const pathname = usePathname();
    return (
        <header className={`fixed flex flex-col justify-center align-middle min-h-screen `}>
            <nav className={`flex flex-col gap-2 p-2 rounded-2xl mx-1 bg-zinc-800`}>
                {/* Links */}
                {links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                pathname === link.href ? 'text-blue-500' : 'text-gray-500',
                                'hover:text-blue-500 p-1'
                            )}
                        >
                            <LinkIcon width={30} />
                        </Link>
                    )
                })}
                {/* Divider */}
                <div className="border border-1 border-gray-500 rounded-xl"></div>
                {/* Settings */}
                <button className="text-gray-500 hover:text-blue-500 p-1">
                    <Cog6ToothIcon width={30} />
                </button>
            </nav>
        </header>
    )
}

export default Header;
