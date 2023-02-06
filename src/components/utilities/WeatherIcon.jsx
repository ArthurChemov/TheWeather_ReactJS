import { useState, useEffect } from 'react';
import './icon.scss'
import { ReactComponent as Svg01d } from '../../assets/icons/01d.svg';
import { ReactComponent as Svg01n } from '../../assets/icons/01n.svg';
import { ReactComponent as Svg02d } from '../../assets/icons/02d.svg';
import { ReactComponent as Svg02n } from '../../assets/icons/02n.svg';
import { ReactComponent as Svg03d } from '../../assets/icons/03d.svg';
import { ReactComponent as Svg03n } from '../../assets/icons/03n.svg';
import { ReactComponent as Svg04d } from '../../assets/icons/04d.svg';
import { ReactComponent as Svg04n } from '../../assets/icons/04n.svg';
import { ReactComponent as Svg09d } from '../../assets/icons/09d.svg';
import { ReactComponent as Svg09n } from '../../assets/icons/09n.svg';
import { ReactComponent as Svg10d } from '../../assets/icons/10d.svg';
import { ReactComponent as Svg10n } from '../../assets/icons/10n.svg';
import { ReactComponent as Svg11d } from '../../assets/icons/11d.svg';
import { ReactComponent as Svg11n } from '../../assets/icons/11n.svg';
import { ReactComponent as Svg13d } from '../../assets/icons/13d.svg';
import { ReactComponent as Svg13n } from '../../assets/icons/13n.svg';
import { ReactComponent as Svg50d } from '../../assets/icons/50d.svg';
import { ReactComponent as Svg50n } from '../../assets/icons/50n.svg';
import { ReactComponent as Svgunknown } from '../../assets/icons/unknown.svg';

const WeatherIcon = ({ svgdata }) => {
  const [svg01d, setSvg01d] = useState(false);
  const [svg01n, setSvg01n] = useState(false);
  const [svg02d, setSvg02d] = useState(false);
  const [svg02n, setSvg02n] = useState(false);
  const [svg03d, setSvg03d] = useState(false);
  const [svg03n, setSvg03n] = useState(false);
  const [svg04d, setSvg04d] = useState(false);
  const [svg04n, setSvg04n] = useState(false);
  const [svg09d, setSvg09d] = useState(false);
  const [svg09n, setSvg09n] = useState(false);
  const [svg10d, setSvg10d] = useState(false);
  const [svg10n, setSvg10n] = useState(false);
  const [svg11d, setSvg11d] = useState(false);
  const [svg11n, setSvg11n] = useState(false);
  const [svg13d, setSvg13d] = useState(false);
  const [svg13n, setSvg13n] = useState(false);
  const [svg50d, setSvg50d] = useState(false);
  const [svg50n, setSvg50n] = useState(false);
  const [svgunknown, setUnknown] = useState(false);

  useEffect(() => {
    if(svgdata === '01d') {
        setSvg01d(true); setSvg01n(false);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(false); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '01n') {
        setSvg01d(false); setSvg01n(true);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(false); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '02d') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(true); setSvg02n(false);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(false); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '02n') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(false); setSvg02n(true);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(false); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '03d') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(true); setSvg03n(false);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(false); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '03n') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(false); setSvg03n(true);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(false); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '04d') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(true); setSvg04n(false);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(false); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '04n') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(false); setSvg04n(true);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(false); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '09d') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(true); setSvg09n(false);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(false); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '09n') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(false); setSvg09n(true);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(false); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '10d') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(true); setSvg10n(false);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(false); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '10n') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(false); setSvg10n(true);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(false); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '11d') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(true); setSvg11n(false);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(false); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '11n') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(false); setSvg11n(true);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(false); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '13d') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(true); setSvg13n(false);
        setSvg50d(false); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '13n') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(false); setSvg13n(true);
        setSvg50d(false); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '50d') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(true); setSvg50n(false);
        setUnknown(false);
    }
    if(svgdata === '50n') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(false); setSvg50n(true);
        setUnknown(false);
    }
    if(svgdata === 'unknown') {
        setSvg01d(false); setSvg01n(false);
        setSvg02d(false); setSvg02n(false);
        setSvg03d(false); setSvg03n(false);
        setSvg04d(false); setSvg04n(false);
        setSvg09d(false); setSvg09n(false);
        setSvg10d(false); setSvg10n(false);
        setSvg11d(false); setSvg11n(false);
        setSvg13d(false); setSvg13n(false);
        setSvg50d(false); setSvg50n(false);
        setUnknown(true);
    }
  }, [svgdata]);

  return (
    <>
        {svg01d ? (<><Svg01d className="icon-small"/></>): null}
        {svg01n ? (<><Svg01n className="icon-small"/></>): null}
        {svg02d ? (<><Svg02d className="icon-small"/></>): null}
        {svg02n ? (<><Svg02n className="icon-small"/></>): null}
        {svg03d ? (<><Svg03d className="icon-small"/></>): null}
        {svg03n ? (<><Svg03n className="icon-small"/></>): null}
        {svg04d ? (<><Svg04d className="icon-small"/></>): null}
        {svg04n ? (<><Svg04n className="icon-small"/></>): null}
        {svg09d ? (<><Svg09d className="icon-small"/></>): null}
        {svg09n ? (<><Svg09n className="icon-small"/></>): null}
        {svg10d ? (<><Svg10d className="icon-small"/></>): null}
        {svg10n ? (<><Svg10n className="icon-small"/></>): null}
        {svg11d ? (<><Svg11d className="icon-small"/></>): null}
        {svg11n ? (<><Svg11n className="icon-small"/></>): null}
        {svg13d ? (<><Svg13d className="icon-small"/></>): null}
        {svg13n ? (<><Svg13n className="icon-small"/></>): null}
        {svg50d ? (<><Svg50d className="icon-small"/></>): null}
        {svg50n ? (<><Svg50n className="icon-small"/></>): null}
        {svgunknown ? (<><Svgunknown className="icon-small"/></>): null}
    </>
  );
};

export default WeatherIcon;