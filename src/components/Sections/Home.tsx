import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Link} from 'react-scroll'

import {homeData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Home: FC = memo(() => {
    const {imageSrc, name, description, actions} = homeData;

    return (
        <Section noPadding sectionId={SectionId.Home}>
            <div className="relative flex h-screen w-screen items-center justify-center">
                <Image
                    alt={`${name}-image`}
                    className="absolute z-0"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    priority
                    src={imageSrc}
                />
                <div className="z-10  max-w-screen-lg px-4 lg:px-0">
                    <div
                        className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-white sm:text-2xl lg:text-2xl">{name}</h2>
                        {description}
                        <div className="flex gap-x-4 text-neutral-100">
                            <Socials/>
                        </div>
                        <div className="flex w-full justify-center gap-x-4">
                            {actions.map(({href, text, primary, Icon}) => (
                                <a
                                    className={classNames(
                                        'flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                                        primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                                    )}
                                    href={href}
                                    key={text}>
                                    {text}
                                    {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6"/>}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <Link smooth={true} spy={true} to={SectionId.About}>
                <div className="absolute inset-x-0 bottom-6 flex justify-center">
                    <div
                        className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
                        style={{cursor: "pointer"}}
                    >
                        <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6"/>
                    </div>
                </div>
                </Link>
            </div>
        </Section>
    );
});

Home.displayName = 'Home';
export default Home;
