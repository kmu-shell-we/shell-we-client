import Avatar from '@/components/ui/avatar';

interface MemberProp {
  name: string;
  avatar: string;
}

export default function Profile(props: MemberProp) {
  return (
    <div className="flex flex-row items-center justify-start gap-4">
      <Avatar size="large" src={props.avatar} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}
