import Spinner from '@/components/ui/spinner';

const LoadingScreen = () => {
  return (
    <div className="flex h-[calc(100dvh-56px-56px-32px)] items-center justify-center pb-32 sm:h-[calc(100dvh-64px-64px-56px)]">
      <Spinner />
    </div>
  );
};

export default LoadingScreen;
