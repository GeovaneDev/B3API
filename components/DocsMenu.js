import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faInfoCircle, faGlobe, faLink } from '@fortawesome/free-solid-svg-icons';

const DocsMenu = () => {
    const pathname = usePathname();

    const isCurrentPage = (page) => {
        return pathname === `/docs${page}`;
    };

    return (
        <div className="col-md-3">
            <div className="list-group">
                <Link href="/docs" passHref className={`list-group-item list-group-item-action ${isCurrentPage('') ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faFileLines} /> Documentação</Link>
                <Link href="/docs/introduction" passHref className={`list-group-item list-group-item-action ${isCurrentPage('/introduction') ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faInfoCircle} /> Introdução</Link>
                <Link href="/docs/endpoints" passHref className={`list-group-item list-group-item-action ${isCurrentPage('/endpoints') ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faLink} /> Endpoints</Link>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .list-group {
                        flex-direction: column;
                    }
                    .list-group-item {
                        text-align: center;
                        padding: 10px;
                    }
                }
            `}</style>
        </div>
    );
};

export default DocsMenu;
