import _ from 'lodash';
import AggTypesParamTypesBaseProvider from 'ui/agg_types/param_types/base';
import editorHtml from 'ui/agg_types/controls/nested.html';

export default function NestedAggParamFactory(Private) {
  var BaseAggParam = Private(AggTypesParamTypesBaseProvider);

  _.class(NestedAggParam).inherits(BaseAggParam);
  function NestedAggParam(config) {
    // force name override
    config = _.defaults(config, {name: 'nested'});
    NestedAggParam.Super.call(this, config);
  }

  NestedAggParam.prototype.editor = editorHtml;

  /**
   * Write the aggregation parameter.
   *
   * @param  {AggConfig} aggConfig - the entire configuration for this agg
   * @param  {object} output - the result of calling write on all of the aggregations
   *                         parameters.
   * @param  {object} output.params - the final object that will be included as the params
   *                               for the agg
   * @return {undefined}
   */
  NestedAggParam.prototype.write = function (aggConfig, output) {
    // handled specially in vis/_agg_config.js, AggConfig.prototype.toDslNested
  };

  return NestedAggParam;
}
