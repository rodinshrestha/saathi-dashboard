"use client";

import React from "react";

import Button from "../Button";
import Typography from "../Typography";

import { StyledDiv } from "./style";

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Client ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <StyledDiv>
          <Typography as="h3" className="error-code">
            500
          </Typography>
          <Typography as="p" className="error-title">
            Something went wrong
          </Typography>

          <div className="btn-wrapper">
            <Button variant="outline" onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </StyledDiv>
      );
    }
    return this.props.children;
  }
}
