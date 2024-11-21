import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: false };
    }

    static getDerivedStateFromError(error) {
        return { error: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught in ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.error) {
            return <h1>오류가 발생했습니다. 새로고침해 주세요.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
