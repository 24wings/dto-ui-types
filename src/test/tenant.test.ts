import { Form } from "../meta-decorator/form.decorator";
import { Field } from "../meta-decorator/form-item.decorator";
import { QueryBar } from "../meta-decorator/query-bar.decorator";
import { StableTable } from "../meta-decorator/stable.decorator";
import { Col as Column } from "../meta-decorator/column.decorator";

@QueryBar<TenantQueryBar>({ loadUrl: '' })
export class TenantQueryBar {
  @Field({ label: '公司名称 公司代码' })
  Filter: string;
  @Field({
    label: '版本',
    loadOptionsUrl: 'Request URL: https://shop.fotaboss.com/api/services/app/Edition/GetEditionComboboxItems?selectedEditionId=0&addAllItem=true&onlyFreeItems=false',
    loadOptionsKey: 'displayText',
    loadOptionsValue: 'value',
    control: 'select'
  })
  EditionId: number;
  @Field({ label: '订阅开始时间', control: 'date' })
  SubscriptionEndDateStart: Date;
  @Field({ label: '订阅结束时间', control: 'date' })
  SubscriptionEndDateEnd: Date;
  @Field({ label: '创建开始时间', control: 'date' })
  CreationDateStart: Date;
  @Field({ label: '创建结束时间', control: 'date' })
  CreationDateEnd: Date;
}


@Form<TenantCreateForm>({ title: '新增租户' })
export class TenantCreateForm {
  @Field({ label: 'id', control: 'text' })
  id: number;
  @Field({ label: '公司姓名', control: 'text' })
  name: string;
  @Field({ label: '租户姓名', control: 'text' })
  tenancyName: string;
  @Field({ label: '激活', control: 'checkbox' })
  isActive: boolean;
  @Field({ label: '过渡期', control: 'checkbox' })
  isInTrialPeriod: boolean;
  @Field({ label: '是否随机密码', control: 'checkbox' })
  isRandomPassword: boolean;
  @Field({ label: '管理员密码', control: 'text' })
  adminPassword: string;
  subscriptionEndDateUtc: Date;
  editionDisplayName: string;
  creationTime: Date;
  connectionString: string;
  editionId?: string;
}

@StableTable({ title: "租户" })
export class TenantList {
  @Column({ title: 'id', type: 'text' })
  id: number;
  @Column({ title: '公司姓名', type: 'text' })
  name: string;
  @Column({ title: '租户姓名', type: 'text' })
  tenancyName: string;
  @Column({ title: '激活', type: 'checkbox' })
  isActive: boolean;
  @Column({ title: '过渡期', type: 'checkbox' })
  isInTrialPeriod: boolean;
  @Column({ title: '是否随机密码', type: 'checkbox' })
  isRandomPassword: boolean;
  @Column({ title: '管理员密码', type: 'text' })
  adminPassword: string;
  subscriptionEndDateUtc: Date;
  editionDisplayName: string;
  creationTime: Date;
  connectionString: string;
  editionId?: string;
}