import StepForm from '@/components/StepForm';
import { theme } from '@/theme';
export default function Home() {
    return (
        <div
            style={{ backgroundColor: theme.loginPage.background }}
            className=" text-white h-screen"
        >
            <StepForm />
        </div>
    );
}
