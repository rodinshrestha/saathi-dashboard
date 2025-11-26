import { cookies } from "next/headers";

import Col from "@/components/Col";
import Container from "@/components/Container";
import Debugger from "@/components/Debugger";
import ErrorBoundary from "@/components/ErrorBoundary";
import Header from "@/components/Header";
import Navbar from "@/components/NavBar";
import Row from "@/components/Row";
import {
  DEBUGGER,
  DEBUGGER_TABLE_PER_PAGE,
} from "@/constant/debugger.constant";
import { PER_PAGE } from "@/constant/pagination.constant";
import BaseProvider from "@/providers/BaseProvider";

type Props = {
  children: React.ReactNode;
};

export default async function BaseLayout({ children }: Props) {
  const apiDebuggerCookieValue =
    (await cookies()).get(DEBUGGER)?.value === "true";

  const tablePerPageCookieValue = (await cookies()).get(
    DEBUGGER_TABLE_PER_PAGE
  )?.value;

  return (
    <BaseProvider>
      <div className="dasbhoard-layout">
        <Navbar />
        <main className="dashboard-main">
          <Header />
          <Debugger
            apiDebuggerCookieValue={apiDebuggerCookieValue}
            tablePerPageCookieValue={tablePerPageCookieValue}
          />
          <div className="dashboard-body">
            <Container>
              <Row>
                <Col>
                  <ErrorBoundary>{children}</ErrorBoundary>
                </Col>
              </Row>
            </Container>
          </div>
        </main>
      </div>
    </BaseProvider>
  );
}
