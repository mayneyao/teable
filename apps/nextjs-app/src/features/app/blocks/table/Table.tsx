import type { IFieldVo, IRecord, IViewVo } from '@teable-group/core';
import { ViewProvider, FieldProvider, RecordProvider } from '@teable-group/sdk';
import { GridView } from '../view/grid/GridView';
import { ViewList } from '../view/list/ViewList';

export interface ITableProps {
  tableId: string;
  fieldServerData: IFieldVo[];
  viewServerData: IViewVo[];
  recordServerData: { records: IRecord[]; total: number };
}

export const Table: React.FC<ITableProps> = ({
  fieldServerData,
  viewServerData,
  recordServerData,
}) => {
  return (
    <ViewProvider fallback={<h1>loading</h1>} serverData={viewServerData}>
      <div className="grow flex flex-col h-full">
        <ViewList />
        <FieldProvider fallback={<h1>loading</h1>} serverSideData={fieldServerData}>
          <RecordProvider serverData={recordServerData}>
            <GridView />
          </RecordProvider>
        </FieldProvider>
      </div>
    </ViewProvider>
  );
};
