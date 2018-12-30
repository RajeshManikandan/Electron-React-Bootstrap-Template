import React, { Component } from 'react';

const AppContext = React.createContext();

export class AppProvider extends Component {
    state = [
        {
            name: 'project-name',
            process: ['', ''],
            resources: ['', ''],
            groups: [
                {
                    resources: ['', ''],
                    process: ['', '']
                }
            ]
        },
        {
            name: 'project-name2',
            process: ['', ''],
            resources: ['', ''],
            groups: [
                {
                    resources: ['', ''],
                    process: ['', '']
                }
            ]
        }
    ];

    render() {
        return (
            <AppContext.Provider value={{ state: this.state, methods: {} }}>{this.props.childern}</AppContext.Provider>
        );
    }
}

export const AppConsumer = AppContext.Consumer;
