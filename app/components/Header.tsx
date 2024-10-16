'use client';
import Link from "next/link";
// import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    HomeIcon,
    DocumentIcon,
    AcademicCapIcon,
    CommandLineIcon,
    LinkIcon,
    // MoonIcon,
} from "@heroicons/react/24/outline";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import {
//     faGithub,
//     faLinkedinIn,
//     faXTwitter
// } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    const pathname = usePathname();
    return (
        <header className={`flex flex-col justify-between my-5 mx-2 fixed top-1/2 left-0 -translate-y-1/2`}>
            <nav className={`flex flex-col gap-2`}>
                <Link href="/"
                    className={`${pathname === '/' ? 'text-blue-500' : 'text-gray-500'}`}
                >
                    <HomeIcon width={30} />

                </Link>
                <Link href="/about"
                    className={`${pathname === '/about' ? 'text-blue-500' : 'text-gray-500'}`}>
                    <DocumentIcon width={30} />
                </Link>

                <Link href="/education"
                    className={`${pathname === '/education' ? 'text-blue-500' : 'text-gray-500'}`}>
                    <AcademicCapIcon width={30} />
                </Link>

                <Link href="/projects"
                    className={`${pathname === '/projects' ? 'text-blue-500' : 'text-gray-500'}`}>
                    <CommandLineIcon width={30} />

                </Link>
                <Link href="/contact"
                    className={`${pathname === '/contact' ? 'text-blue-500' : 'text-gray-500'}`}>
                    <LinkIcon width={30} />

                </Link>
            </nav>

        </header>
    )
}

export default Header;

{/* <section className={`flex flex-col gap-2`}>
                <Link
                    href="https://www.linkedin.com/in/m-essam/"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />

                </Link>
                <Link
                    href="https://github.com/m-essam-s"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
                <Link
                    href="https://x.com/m_essam_s"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faXTwitter} size="2x" />
                </Link>
            </section>
            <section >
                <MoonIcon width={30} />
            </section> */}


// <section>
//     <Image
//         src="/logo.ico"
//         alt="Elite Solutions Logo"
//         width={30}
//         height={30}
//     />
// </section>