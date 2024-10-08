import Svg, { Path, SvgProps } from 'react-native-svg';

function Heart({ size = 20, color = 'black', ...props }: { size?: number } & SvgProps) {
    return (
        <Svg width={22} height={20} viewBox="0 0 22 20" fill="none" {...props}>
            <Path
                clipRule="evenodd"
                d="M1.872 9.598c-1.073-3.35.18-7.179 3.698-8.312a6.007 6.007 0 015.43.912c1.455-1.125 3.572-1.505 5.42-.912 3.517 1.133 4.779 4.962 3.707 8.312-1.67 5.31-9.127 9.4-9.127 9.4s-7.402-4.028-9.128-9.4z"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path d="M15 4.7a2.781 2.781 0 011.917 2.422" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    );
}

export default Heart;
