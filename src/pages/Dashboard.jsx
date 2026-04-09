import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { user, statCards } from '@/features/dashboard/dashboardData'
import { ArrowRightIcon } from 'lucide-react'

const Dashboard = () => (
  <div className="space-y-6">

    {/* Header */}
    <div>
      <h1 className="text-2xl font-semibold text-foreground">Welcome, {user.name}</h1>
      <p className="text-sm text-muted-foreground mt-0.5">{user.role} &mdash; {user.department}</p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {statCards.map(({ title, value, icon: Icon }) => (
        <Card key={title} className="shadow-none">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-xs text-muted-foreground">{title}</p>
              <p className="text-2xl font-semibold mt-1">{value}</p>
            </div>
            <div className="size-10 rounded-lg bg-brand-muted flex items-center justify-center">
              <Icon className="size-4 text-brand" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Actions */}
    <div className="flex gap-3">
      <Button size="sm">Mark Attendance <ArrowRightIcon className="size-3.5" /></Button>
      <Button size="sm" variant="outline">Apply for Leave</Button>
    </div>

  </div>
)

export default Dashboard
