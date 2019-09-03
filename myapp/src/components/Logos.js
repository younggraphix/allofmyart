import React from 'react';

var logoArray = [
    [
        'trapezeLabs',
        '2f42416a-dbcc-4888-ba32-7a27746996b2_rw_1920.gif'
    ],
    [
        'jellyfish labs',
        'cd37a104-ccb7-4745-94db-53c195efcc4f_rw_1920.png'
    ],
    [
        'ale young',
        '9e6f645d-14ec-4095-9797-a2e58a796314_rw_1200.gif'
    ],
    [
        'wlns.life',
        'c31612cc-3f63-4874-96a4-ebe85d90d2a4_rw_1920.png'
    ],
    [
        'Stag',
        'fdd034ae-bcb7-488e-ab99-be16e40f1ef7_rw_1920.png'
    ],
    [
        'wyld',
        'wyld.png'
    ]
]

export default class Logos extends React.Component {
    render() {
        return (
            <div className="logos">
                <>
                    {logoArray.map(logo => (
                        <li className="logo-wrapper">
                            <img key={logo[0]} src={'/img/' + logo[1]} alt={logo[0]} onClick={(e) => this.showImageDetails(logo[1])} />
                        </li>
                    ))}
                </>
            </div>
        )
    }
}