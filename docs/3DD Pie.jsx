Pie.propTypes = {
  /** Styling of the Legend labels. */
  legendLabelStyle: PropTypes.object,
  /** Styling of the Value labels. */
  valueLabelStyle: PropTypes.object,
  /** Corner radius */
  cornerRadius: PropTypes.number,
  /** Padding Angle */
  padAngle: PropTypes.number,
  /** Dispaly charta s donut */
  isDonut: PropTypes.bool,
  /** Thickness of the donut */
  donutThickness: PropTypes.number,
  /** Sort by Labels */
  pieSort: PropTypes.oneOf([
    "asc",
    "desc",
    "ASC",
    "DESC",
    "Ascending",
    "ASCENDING",
    "Descending",
    "DESCENDING",
  ]),
  /** Sort by Values */
  pieSortValues: PropTypes.oneOf([
    "asc",
    "desc",
    "ASC",
    "DESC",
    "Ascending",
    "ASCENDING",
    "Descending",
    "DESCENDING",
  ]),
};

Pie.defaultProps = {
  calcCondition: undefined,
  width: "100%",
  height: "400px", // 100%
  size: "medium",
  border: true,
  colorTheme: null,
  sortOrder: [],
  sortDirection: "",
  // stacked: false,
  showAsPercent: false,
  gridArea: null,
  showLegend: false,
  legendLeftRight: "right",
  legendTopBottom: "top",
  legendDirection: "row",
  legendShape: "auto",
  parseDateFormat: null,
  formatTooltipDate: null,
  strokeWidth: null,
  showTooltip: true,
  pieSort: "asc",
};

export default Pie;
