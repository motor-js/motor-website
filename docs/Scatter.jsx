function Scatter({ cols, stacked, ...rest }) {
  return (
    <XYChart // width={750} height={400}  events={true}
    />
  );
}

Scatter.propTypes = {
  /** Show gridline rows on Axis */
  gridRows: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  /** Show gridline columns on Axis */
  gridColumns: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  /** Show shadow around Scatter Chart */
  showBoxShadow: PropTypes.bool,
  /** Shape of the symbol to be used on the line. This will apply to all series on the chart */
  showPoints: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string, // { symbol : "circle","cross","diamond","square","star","triangle","wye","none", size}
  ]),
  useAnimatedAxes: PropTypes.bool,
  autoWidth: PropTypes.bool,
  includeZero: PropTypes.bool,
  xAxisOrientation: PropTypes.oneOf(["top", "bottom"]),
  yAxisOrientation: PropTypes.oneOf(["left", "right"]),
  // legendLeftRight: PropTypes.oneOf(["left", "right"]),
  // legendTopBottom: PropTypes.oneOf(["top", "bottom"]),
  // legendDirection: PropTypes.oneOf(["row", "column"]),
  // legendShape: PropTypes.string,
  backgroundPattern: PropTypes.oneOf(["Lines", "Circles", "Hexagon", "Waves"]),
  /** BackgroundSTyle */
  /** either : style of one of below or bckgroundFrom and bckgroundTo */
  /**  Linear  */
  /**  Radial  */
  /**  DarkGreen  */
  /**  LightGreen  */
  /**  OrangeRed  */
  /**  PinkBlue  */
  /**  PinkRed  */
  /**  PurpleOrangle  */
  /**  PurpleRed  */
  /**  PurpleTeal  */
  /**  SteelPurple  */
  /**  TealBlue  */
  backgroundStyle: PropTypes.object,

  /** fillStyle */
  /** either : style of one of below or fillFrom and FillTo */
  /**  Linear  */
  /**  Radial  */
  /**  DarkGreen  */
  /**  LightGreen  */
  /**  OrangeRed  */
  /**  PinkBlue  */
  /**  PinkRed  */
  /**  PurpleOrangle  */
  /**  PurpleRed  */
  /**  PurpleTeal  */
  /**  SteelPurple  */
  /**  TealBlue  */
  fillStyle: PropTypes.object,

  multiColor: PropTypes.bool,
  events: PropTypes.bool,
  // /** Use dual Y axis on the the chart  */
  // dualAxis: PropTypes.bool,
  /** Show CrossHair on the chart  */
  showCrossHair: PropTypes.bool,
  /** Styling of the CrossHair. */
  crossHairStyles: PropTypes.object,
  /** Snap to X Axis (normally true for bar or combo) */
  snapToDataX: PropTypes.bool,
  /** Snap to Y Axis (normally true for bar or combo) */
  snapToDataY: PropTypes.bool,
  /** Show value only for Tooltip */
  valueOnly: PropTypes.bool,
  /** Show single line fo text and value for tooltip */
  valueWithText: PropTypes.bool,
  /** Input format of date supplied from engine (in qText) */
  parseDateFormat: PropTypes.string,
  /** Reposition the tooltip. */
  shiftTooltipTop: PropTypes.number,
  /** Reposition the tooltip. */
  shiftTooltipLeft: PropTypes.number,
  /** Line stroke width */
  strokeWidth: PropTypes.number,
  /** Styles for the X Axis ticks */
};

export default Scatter;
