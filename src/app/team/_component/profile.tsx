import Avatar from '@/components/ui/avatar';

interface MemberProp {
  name: string;
  avatar: string;
}

export default function Profile(props: MemberProp) {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <Avatar src={props.avatar} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}
