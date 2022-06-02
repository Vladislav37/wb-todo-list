import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import { ReduxStoreLoader } from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import { AppLayout } from '@/_layouts/app-layout';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { Page } from './page';
import { storeInjectConfig } from './store-inject-config';
import { PAGE_SUB_NAMESPACE } from './_constants/translations/page-sub-namespace';

const pageNode = 'todo';

const action = async ({ fromState, toState }) => {
  return {
    title: i18next.t(`${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.title`),
    storeInjectConfig,
    content: (
      <ReduxStoreLoader
        fromState={fromState}
        storeInjectConfig={storeInjectConfig}
        toState={toState}
      >
        <AppLayout>
          <RouteNode nodeName={pageNode}>{() => <Page />}</RouteNode>
        </AppLayout>
      </ReduxStoreLoader>
    ),
  };
};

export default action;
