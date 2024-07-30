// 로딩 스켈레톤 사용 : UI의 간소화 버전
import DashboardSkeleton from '@/app/ui/skeletons';

/*
* 화면 진입 시간이 길어질 시 대기 하는 동안 보여주는 화면 이다.
*/
export default function Loading() {
  return <DashboardSkeleton />
}