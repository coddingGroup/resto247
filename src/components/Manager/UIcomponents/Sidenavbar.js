
import React, { useState } from 'react';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import DairyUsage from './DairyUsage';


const SideNavbar = (props) => {




    return (
        <>
            <Navigation
                // you can use your own router's api to get pathname
                activeItemId="/home"
                onSelect={({ itemId }) => {
                    <DairyUsage />
                }}
                items={[
                    {
                        title: 'Dashboard',
                        itemId: '/home',
                        // you can use your own custom Icon component as well
                        // icon is optional
                      //  elemBefore: () => <Icon name="inbox" />,
                    },
                    {
                        title: 'Management',
                        itemId: '/management',
                       // elemBefore: () => <Icon name="users" />,
                        subNav: [
                            {
                                title: 'Projects',
                                itemId: '/management/projects',
                            },
                            {
                                title: 'Members',
                                itemId: '/management/members',
                            },
                        ],
                    },
                    {
                        title: 'Another Item',
                        itemId: '/another',
                        subNav: [
                            {
                                title: 'Teams',
                                itemId: '/management/teams',
                            },
                        ],
                    },
                ]}
            />
        </>
    );
}

export default SideNavbar;

